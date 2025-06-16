using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Shapes;
using System.Windows.Threading;

namespace PlanetSimulation
{
    public partial class MainWindow : Window
    {
        private readonly Canvas _canvas = new Canvas();
        private readonly List<Planet> _planets = new List<Planet>();
        private readonly Random _rand = new Random();
        private DispatcherTimer _timer;
        private const double G = 0.1; // gravitational constant
        private const int MaxPieces = 10000;
        private const int GravityLimit = 1000; // disable gravity above this

        public MainWindow()
        {
            InitializeComponent();
        }

        private void StartButton_Click(object sender, RoutedEventArgs e)
        {
            RootGrid.Children.Clear();
            RootGrid.Children.Add(_canvas);
            StartSimulation();
        }

        private void CloseButton_Click(object sender, RoutedEventArgs e)
        {
            Close();
        }

        private void StartSimulation()
        {
            _canvas.Children.Clear();
            _planets.Clear();
            _timer = new DispatcherTimer { Interval = TimeSpan.FromMilliseconds(16) };
            _timer.Tick += OnTick;

            const double startSpeed = 2.0;
            Vector randVel1 = new Vector((_rand.NextDouble() - 0.5) * startSpeed,
                                        (_rand.NextDouble() - 0.5) * startSpeed);
            Vector randVel2 = new Vector((_rand.NextDouble() - 0.5) * startSpeed,
                                        (_rand.NextDouble() - 0.5) * startSpeed);
            AddPlanet(new Point(200, 200), randVel1, 20, Brushes.Red);
            AddPlanet(new Point(600, 200), randVel2, 20, Brushes.Blue);

            _timer.Start();
        }

        private void AddPlanet(Point pos, Vector vel, double radius, Brush brush)
        {
            var ellipse = new Ellipse { Width = radius * 2, Height = radius * 2, Fill = brush };
            _canvas.Children.Add(ellipse);
            var planet = new Planet
            {
                Shape = ellipse,
                Position = pos,
                Velocity = vel,
                Radius = radius,
                Mass = radius * radius
            };
            _planets.Add(planet);
            UpdateShape(planet);
        }

        private void OnTick(object sender, EventArgs e)
        {
            // Apply gravitational forces only when the object count is manageable
            if (_planets.Count < GravityLimit)
            {
                for (int i = 0; i < _planets.Count; i++)
                {
                    for (int j = i + 1; j < _planets.Count; j++)
                    {
                        var p1 = _planets[i];
                        var p2 = _planets[j];
                        Vector delta = p2.Position - p1.Position;
                        double dist2 = delta.X * delta.X + delta.Y * delta.Y;
                        double dist = Math.Sqrt(dist2);
                        if (dist == 0) continue;
                        Vector dir = delta / dist;
                        double force = G * p1.Mass * p2.Mass / dist2;
                        Vector accel1 = dir * (force / p1.Mass);
                        Vector accel2 = -dir * (force / p2.Mass);
                        p1.Velocity += accel1;
                        p2.Velocity += accel2;
                    }
                }
            }

            // Update positions
            foreach (var p in _planets)
            {
                p.Position += p.Velocity;
            }

            // Handle collisions
            for (int i = 0; i < _planets.Count; i++)
            {
                for (int j = i + 1; j < _planets.Count && i < _planets.Count; j++)
                {
                    if (j >= _planets.Count) break;
                    var p1 = _planets[i];
                    var p2 = _planets[j];
                    Vector delta = p2.Position - p1.Position;
                    double dist = delta.Length;
                    if (dist <= p1.Radius + p2.Radius)
                    {
                        if (_planets.Count < MaxPieces)
                        {
                            SplitPlanet(i);
                            SplitPlanet(j - 1); // index may shift after first split
                            j = i; // restart checks for this index
                        }
                        else
                        {
                            Bounce(p1, p2);
                        }
                    }
                }
            }

            foreach (var p in _planets)
                UpdateShape(p);
        }

        private void SplitPlanet(int index)
        {
            if (index >= _planets.Count) return;
            var parent = _planets[index];
            _canvas.Children.Remove(parent.Shape);
            _planets.RemoveAt(index);

            for (int i = 0; i < 10; i++)
            {
                double radius = Math.Max(2, parent.Radius / 2);
                Vector vel = parent.Velocity + new Vector(_rand.NextDouble() - 0.5, _rand.NextDouble() - 0.5);

                Point pos;
                int attempts = 0;
                do
                {
                    double angle = _rand.NextDouble() * 2 * Math.PI;
                    double dist = _rand.NextDouble() * parent.Radius * 2; // blast radius
                    pos = new Point(parent.Position.X + dist * Math.Cos(angle), parent.Position.Y + dist * Math.Sin(angle));
                    attempts++;
                } while (OverlapsAny(pos, radius) && attempts < 50);

                AddPlanet(pos, vel, radius, ((SolidColorBrush)parent.Shape.Fill));
            }
        }

        private bool OverlapsAny(Point pos, double radius)
        {
            foreach (var p in _planets)
            {
                Vector delta = p.Position - pos;
                double dist = delta.Length;
                if (dist < p.Radius + radius)
                    return true;
            }
            return false;
        }

        private void Bounce(Planet p1, Planet p2)
        {
            Vector delta = p2.Position - p1.Position;
            Vector normal = delta;
            normal.Normalize();
            double v1 = Vector.Multiply(p1.Velocity, normal);
            double v2 = Vector.Multiply(p2.Velocity, normal);
            double m1 = p1.Mass;
            double m2 = p2.Mass;
            double optimizedP = (2.0 * (v1 - v2)) / (m1 + m2);
            p1.Velocity -= optimizedP * m2 * normal;
            p2.Velocity += optimizedP * m1 * normal;
        }

        private void UpdateShape(Planet p)
        {
            Canvas.SetLeft(p.Shape, p.Position.X - p.Radius);
            Canvas.SetTop(p.Shape, p.Position.Y - p.Radius);
        }
    }

    public class Planet
    {
        public Ellipse Shape { get; set; }
        public Point Position { get; set; }
        public Vector Velocity { get; set; }
        public double Mass { get; set; }
        public double Radius { get; set; }
    }
}
