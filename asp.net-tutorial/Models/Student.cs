using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ContosoUniversity.Models
{
    public class Student
    {
        public int ID {get; set;}
        [Display(Name="Last Name")]
        public string LastName {get; set;}
        [Display(Name = "First and Middle Name")]
        public string FirstMidName{get; set;}
        [Display(Name="Enrollment Date")]
        [DataType(DataType.Date)]
        public DateTime EnrollmentDate {get; set;}
        public ICollection<Enrollment> Enrollments{get; set;}
    }
}