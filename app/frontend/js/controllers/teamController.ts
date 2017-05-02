namespace app.Controllers {

  export class TeamController {
    public team;

    constructor() {
      this.team = [
        {
          name: 'Jack',
          image: 'assets/gfx/team/16 (1).jpg',
          title: 'Data Scientist',
          githubURL: '#',
          linkedinURL: '#',
          email: 'jac2186044@gmail.com'
        },
        {
          name: 'Drew',
          image: 'assets/gfx-c/drew.jpg',
          title: 'Master CLI',
          githubURL: '#',
          linkedinURL: '#',
          email: 'drewco@cox.net'
        },
        {
          name: 'Donte',
          image: 'assets/gfx/team/13.jpg',
          title: 'Front End Developer',
          githubURL: '#',
          linkedinURL: 'https://www.linkedin.com/in/donte-bruce-a36989139/',
          email: 'dats1win@yahoo.com'
        },
        {
          name: 'Erik',
          image: 'https://instagram.fphx1-1.fna.fbcdn.net/t51.2885-19/s150x150/17663661_1941386066080788_415516361943416832_a.jpg',
          title: 'Front End Developer',
          githubURL: '#',
          linkedinURL: '#',
          email: 'elarsonwebco@gmail.com'
        }
      ];
    }
  }

}
