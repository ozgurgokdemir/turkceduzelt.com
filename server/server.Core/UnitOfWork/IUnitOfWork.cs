using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Core.UnitOfWork
{
    public interface IUnitOfWork
    {
        Task CommmitAsync();

        void Commit();
    }
}
