using System.Collections.Generic;
using System.Threading.Tasks;
using CreedsCode.Portfolio.BackService.Data;
using CreedsCode.Portfolio.BackService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CreedsCode.Portfolio.BackService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OnlineProfiles : Controller
    {
        private readonly ApiDataContext _context;

        public OnlineProfiles(ApiDataContext context)
        {
            _context = context;
        }

        // GET
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OnlineProfile>>> GetOnlineProfiles()
        {
            return await _context.OnlineProfiles.ToListAsync();
        }

    }
}