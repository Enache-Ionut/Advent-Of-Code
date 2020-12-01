using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day6
{
  class Program
  {
    static void Main(string[] args)
    {
      ReadData(out Dictionary<string, string> orbits);

      Part1(orbits);
      Part2(orbits);
      
      Console.Read();
    }

    private static void Part1(Dictionary<string, string> orbits)
    {
      var count = 0;
      foreach (var pair in orbits)
      {
        ++count;
        var key = pair.Key;
        var value = pair.Value;
        while (orbits.ContainsKey(value))
        {
          ++count;
          key = value;
          value = orbits[key];
        }
      }
      Console.WriteLine("Part1 : " + count);
    }

    private static void Part2(Dictionary<string, string> orbits)
    {
      var you = GetPath("YOU", orbits);
      var san = GetPath("SAN", orbits);
      Console.WriteLine("Part2 : " + you.Except(san).Count() + san.Except(you).Count());
    }

    private static List<string> GetPath(string start, Dictionary<string, string> orbits)
    {
      var path = new List<string>();
      while (orbits.ContainsKey(start))
      {
        start = orbits[start];
        path.Add(start);
      }
      return path;
    }

    private static void ReadData(out Dictionary<string, string> orbits)
    {
      orbits = new Dictionary<string, string>();
      using StreamReader reader = new StreamReader("input.txt");

      var text = reader.ReadToEnd().Split('\n');
      foreach (var element in text)
      {
        var orbit = element.Trim('\r').Split(')');
        if(orbits.ContainsKey(orbit[1]))
          Console.WriteLine("Exists");
        orbits.Add(orbit[1], orbit[0]);
      }
    }
  }
}
