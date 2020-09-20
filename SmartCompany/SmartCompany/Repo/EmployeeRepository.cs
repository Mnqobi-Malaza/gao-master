using SmartCompany.interfaces;
using SmartCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartCompany.Repo
{
    public class EmployeeRepository : IEmployeeRepository
    {
        public virtual Employee GetEmployee(int id)
        {
            var obj = new Employee();
            return obj;
        }
    }
}
