using System.ComponentModel.DataAnnotations;

namespace CreedsCode.Portfolio.BackService.Models
{
    public class OnlineProfile
    {
        [Key] 
        public long Id { get; set; }

        [Required] public string Url { get; set; }

        [Required] public string Name { get; set; }
    }
}