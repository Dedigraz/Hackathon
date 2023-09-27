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
        var folder = Environment.SpecialFolder.LocalApplicationData;
        var path = Environment.GetFolderPath(folder);
        DbPath = System.IO.Path.Join(path, "hackathon.db");
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options.UseSqlite($"Data Source={DbPath}");
}