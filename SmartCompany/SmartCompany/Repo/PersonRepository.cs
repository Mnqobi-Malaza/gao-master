using SmartCompany.interfaces;
using SmartCompany.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace SmartCompany.Repo
{
    public class PersonRepository : IPersonRepository
    {
        public void AddPerson()
        {

        }

        public virtual void UpdatePerson()
        {

        }

        public virtual Person GetPersons()
        {
            var obj =  new Person();
            return obj;
        }
    }
}
