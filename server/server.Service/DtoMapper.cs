using AutoMapper;
using server.Core.DTOs;
using server.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Service
{
    public class DtoMapper : Profile
    {
        public DtoMapper()
        {          
            CreateMap<UserAppDto, UserApp>().ReverseMap();
        }
    }
}
