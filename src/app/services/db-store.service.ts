import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbStoreService {
  constructor() {}



  private scrollSubject = new Subject<string>();
  public scrollObservable$ = this.scrollSubject.asObservable();

  scrollTo(section: string): void {
    this.scrollSubject.next(section);
  }


  public user: { [key: string]: any } = {
    firstName: 'Kamal',
    lastName: 'Ruidas',
    fullName: 'Kamal Ruidas',
    age: 29,
    role: 'Software Developer',
    position: "Level II",
    avtarPath: '',
    linkedinUrl: "https://www.linkedin.com/in/imkamalbabu/",
    githubUrl: "https://github.com/kamaldasbabu/"
  };

  public experience: { [key: string]: string | number | boolean }[] = [
    {
      totalExperiece: 1,
      joiningDate: '01-01-2021',
      lastDate: '12-09-2023',
      role: 'Asssociate Developer',
      companyName: 'BLU Cocoon Digital Pvt. Ltd',
      companyAddress: 'Eco Space business Park',
      companyContactNumber: '9899828229',
      companyEmailId: 'bcd@bcd.com',
      isWorking: false,
    },
    {
      totalExperiece: 1,
      joiningDate: '18-09-2023',
      lastDate: '',
      role: 'Software Developer',
      companyName: 'Data Core Systems(India) Pvt. Ltd.',
      companyAddress: 'Karunaamoyee',
      companyContactNumber: '9899828229',
      companyEmailId: 'bcd@bcd.com',
      isWorking: true,
    },
  ];
  public education: { [key: string]: string | number | boolean }[] = [
    { instuteName: 'GCETTB', passingYear: 2020, degree: 'B-Tech' },
  ];

  public skill: { [key: string]: string | number | boolean }[] = [
    {
      skillName: 'Angular',
      staringData: '04-01-2021',
      endingData: '12-11-2023',
      skillRating: 4,
      skillValue: 90,
      totalExperiece: 4,
    },
    {
      skillName: 'Node JS',
      staringData: '04-01-2021',
      endingData: '12-11-2023',
      skillRating: 4,
      skillValue: 90,
      totalExperiece: 4,
    },
    {
      skillName: 'Mongo DB',
      staringData: '04-01-2021',
      endingData: '12-11-2023',
      skillRating: 4,
      skillValue: 90,
      totalExperiece: 4,
    },
  ];

  public about = {
    msg: "I'm a full stack developer, Having about to 3 years of experience ",
    totalExpeience: "2 Years 11 Months",
    highestQulifications: "B Tech in Computer Science and Engineering"
  };
  public contact: { [key: string]: string | number | boolean } = {
    phoneNumber: '9002888618',
    emailId: 'mailto:kamaldasbabu@gmail.com',
    linkedinUrl: "https://www.linkedin.com/in/imkamalbabu/",
    githubUrl: "https://github.com/kamaldasbabu/"
  };

  public projects: { [key: string]: string | number | boolean | {} }[] = [
    {
      projectName: 'Innovaition 360',
      link: '',
      technologyUse: {
        1: 'Angular',
        2: 'Node JS',
        3: 'MongoDB',
      },
      staringDate: "",
      endingDate: "",
      status: 'Completed',
      isActive: true,
    },
    {
      projectName: 'Thai Farmar app',
      link: '',
      technologyUse: {
        1: 'Angular',
        2: 'Node JS',
        3: 'MongoDB',
      },
      status: 'Completed',
      staringDate: "",
      endingDate: "",
      isActive: true,
    },
  ];
}
