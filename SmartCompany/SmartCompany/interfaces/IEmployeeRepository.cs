using SmartCompany.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmartCompany.interfaces
{
    public class IEmployeeRepository
    {
         virtual Employee  GetEmployee(int id);

    }
}
