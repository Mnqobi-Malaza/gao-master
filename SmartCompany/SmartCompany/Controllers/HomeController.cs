using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SmartCompany.Repo;

namespace SmartCompany.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;
        private PersonRepository _personRepo;

        public HomeController(ILogger<HomeController> logger, PersonRepository personRepo)
        {
            _logger = logger;
            _personRepo = personRepo;
        }

        [HttpGet]
        public IActionResult AddPerson()
        {
            _personRepo.AddPerson();

            return Ok();
        }

        [HttpGet]
        public IActionResult GetPersons()
        {
            _personRepo.GetPersons();

            return Ok();
        }

        [HttpGet]
        public IActionResult GetEmployee(int id)
        {
            _personRepo.GetEmployee();

            return Ok();
        }
    }
}
