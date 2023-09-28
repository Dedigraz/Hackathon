using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using models.Models;

namespace models;

public class ModelsContext : DbContext
{
    
    public string DbPath { get; private set; }
    public ModelsContext()
    {
        string relativePath = @"Data\db.sqlite";
        var parentdir = Path.GetDirectoryName(Environment.CurrentDirectory);
        DbPath = Path.Combine(parentdir!, relativePath);
    }

    public ModelsContext(DbContextOptions<ModelsContext> options): base(options){
    }

    public DbSet<WeatherForecast> WeatherForecasts { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder options){
            DbPath = Path.Combine(Environment.CurrentDirectory, "db.sqlite");

            options.UseSqlite($"Data Source={DbPath}");
        }
}