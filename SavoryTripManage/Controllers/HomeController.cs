﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

using System.Web.Mvc;

namespace SavoryTripManage.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.ReleaseNo = ConfigurationManager.AppSettings["ReleaseNo"];

            return View();
        }
    }
}
