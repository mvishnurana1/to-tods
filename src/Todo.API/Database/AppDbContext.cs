using Microsoft.EntityFrameworkCore;
using Todo.API.Models;

namespace Todo.API.Database
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {}

        public DbSet<User> Users { get; set; }
        public DbSet<WorkItem> WorkItems { get; set; }
    }
}
