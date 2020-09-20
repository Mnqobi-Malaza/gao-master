using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartCompany.Models
{
    public class Student : Person
    {
        public int StudentID { get; set; }
        public string Course { get; set; }
    }
}
