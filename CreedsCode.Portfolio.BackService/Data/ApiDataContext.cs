using CreedsCode.Portfolio.BackService.Models;
using Microsoft.EntityFrameworkCore;

namespace CreedsCode.Portfolio.BackService.Data
{
    public class ApiDataContext : DbContext
    {
        public ApiDataContext(DbContextOptions<ApiDataContext> options) : base(options)
        {
        }

        public DbSet<OnlineProfile> OnlineProfiles { get; set; }
    }
}