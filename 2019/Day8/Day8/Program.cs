using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day8
{
  class Program
  {
    static void Main(string[] args)
    {
      int width = 25;
      int height = 6;

      int[] inputDigits = ReadInput()
          .Select(ch => (int)char.GetNumericValue(ch))
          .ToArray();

      int numberOfLayers = inputDigits.Length / (width * height);
      var layers = new int[numberOfLayers][,];

      int digitCounter = 0;
      for (var layerIterator = 0; layerIterator < numberOfLayers; ++layerIterator)
      {
        layers[layerIterator] = new int[width, height];
        int[,] layer = layers[layerIterator];
        for (var h = 0; h < height; ++h)
        {
          for (var w = 0; w < width; ++w)
          {
            layer[w, h] = inputDigits[digitCounter++];
          }
        }
      }

      Console.WriteLine(Part1(layers));
      Console.WriteLine(Part2(layers, width, height));

      Console.Read();
    }

    private static string ReadInput() => new StreamReader("input.txt").ReadToEnd();

    private static int Part1(int[][,] layers)
    {
      int minIndex = 0;
      for (int i = 1; i < layers.Length; i++)
        if (GetNumberOfDigits(layers[i], 0) < GetNumberOfDigits(layers[minIndex], 0))
          minIndex = i;

      return GetNumberOfDigits(layers[minIndex], 1) * GetNumberOfDigits(layers[minIndex], 2);
    }

    private static int GetNumberOfDigits(int[,] layer, int value)
    {
      return layer.Cast<int>().Count(d => d == value);
    }

    private static string Part2(int[][,] layers, int width, int height)
    {
      var renderedImage = new int[width, height];

      for (var x = 0; x < renderedImage.GetLength(0); x++)
        for (var y = 0; y < renderedImage.GetLength(1); y++)
          renderedImage[x, y] = FindPixel(layers, x, y);

      // Print rendered image to console
      for (int y = 0; y < renderedImage.GetLength(1); y++)
      {
        for (int x = 0; x < renderedImage.GetLength(0); x++)
        {
          switch (renderedImage[x, y])
          {
            case 0: Console.BackgroundColor = ConsoleColor.Black; break;
            case 1: Console.BackgroundColor = ConsoleColor.White; break;
            case 2: Console.BackgroundColor = ConsoleColor.Green; break;
          }
          Console.Write(' ');
        }
        Console.WriteLine();
      }

      return "";
    }

    private static int FindPixel(int[][,] layers, int x, int y)
    {
      for (var i = 0; i < layers.Length; ++i)
      {
        int currentPixel = layers[i][x, y];
        if (currentPixel != 2)
          return currentPixel;
      }
      return 2;
    }

  }
}
