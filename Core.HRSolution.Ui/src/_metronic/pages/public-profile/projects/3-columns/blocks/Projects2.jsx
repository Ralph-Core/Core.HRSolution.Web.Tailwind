import { useState } from 'react';
import { KeenIcon } from '@/_metronic/components';
import { CardProject, CardProjectRow } from '@/_metronic/partials/cards';
const Projects2 = () => {
  const [activeView, setActiveView] = useState('cards');
  const projects = [{
    logo: 'plurk.svg',
    name: 'Phoenix SaaS',
    description: 'Real-time photo sharing app',
    startDate: 'Mar 06',
    endDate: 'Dec 21',
    status: {
      label: 'In Progress',
      variant: 'badge-primary'
    },
    progress: {
      variant: 'progress-primary',
      value: 55
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-4.png'
      }, {
        filename: '300-2.png'
      }, {
        fallback: 'S',
        variant: 'text-primary-inverse ring-primary-light bg-primary'
      }]
    }
  }, {
    logo: 'telegram.svg',
    name: 'Radiant Wave',
    description: 'Short-term accommodation marketplace',
    startDate: 'Mar 09',
    endDate: 'Dec 23',
    status: {
      label: 'Completed',
      variant: 'badge-success'
    },
    progress: {
      variant: 'progress-success',
      value: 100
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-24.png'
      }, {
        filename: '300-7.png'
      }]
    }
  }, {
    logo: 'kickstarter.svg',
    name: 'Dreamweaver',
    description: 'Social media photo sharing',
    startDate: 'Mar 05',
    endDate: 'Dec 12',
    status: {
      label: 'Upcoming',
      variant: ''
    },
    progress: {
      variant: 'progress-gray-300',
      value: 100
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-21.png'
      }, {
        filename: '300-1.png'
      }, {
        filename: '300-2.png'
      }],
      more: {
        number: 10,
        variant: 'text-success-inverse ring-success-light bg-success'
      }
    }
  }, {
    logo: 'quickbooks.svg',
    name: 'Horizon Quest',
    description: 'Team communication and collaboration',
    startDate: 'Mar 03',
    endDate: 'Dec 11',
    status: {
      label: 'In Progress',
      variant: 'badge-primary'
    },
    progress: {
      variant: 'progress-primary',
      value: 19
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-1.png'
      }, {
        filename: '300-2.png'
      }, {
        fallback: 'M',
        variant: 'text-danger-inverse ring-danger-light bg-danger'
      }]
    }
  }, {
    logo: 'google-analytics.svg',
    name: 'Golden Gate Analytics',
    description: 'Note-taking and organization app',
    startDate: 'Mar 22',
    endDate: 'Dec 14',
    status: {
      label: 'Upcoming',
      variant: ''
    },
    progress: {
      variant: 'progress-gray-300',
      value: 100
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-5.png'
      }, {
        filename: '300-17.png'
      }, {
        filename: '300-16.png'
      }]
    }
  }, {
    logo: 'google-webdev.svg',
    name: 'Celestial SaaS',
    description: 'CRM App application to HR efficienty',
    startDate: 'Mar 14',
    endDate: 'Dec 25',
    status: {
      label: 'Completed',
      variant: 'badge-success'
    },
    progress: {
      variant: 'progress-success',
      value: 100
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-6.png'
      }, {
        filename: '300-23.png'
      }, {
        filename: '300-12.png'
      }],
      more: {
        number: 10,
        variant: 'text-primary-inverse ring-primary-light bg-primary'
      }
    }
  }, {
    logo: 'figma.svg',
    name: 'Nexus Design System',
    description: 'Online discussion and forum platform',
    startDate: 'Mar 17',
    endDate: 'Dec 08',
    status: {
      label: 'Upcoming',
      variant: ''
    },
    progress: {
      variant: 'progress-gray-300',
      value: 100
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-14.png'
      }, {
        filename: '300-3.png'
      }, {
        filename: '300-19.png'
      }, {
        filename: '300-9.png'
      }]
    }
  }, {
    logo: 'btcchina.svg',
    name: 'Neptune App',
    description: 'Team messaging and collaboration',
    startDate: 'Mar 09',
    endDate: 'Dec 23',
    status: {
      label: 'In Progress',
      variant: 'badge-primary'
    },
    progress: {
      variant: 'progress-primary',
      value: 35
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-21.png'
      }, {
        filename: '300-32.png'
      }, {
        filename: '300-2.png'
      }],
      more: {
        number: 1,
        variant: 'text-success-inverse ring-success-light bg-success'
      }
    }
  }, {
    logo: 'patientory.svg',
    name: 'SparkleTech',
    description: 'Meditation and relaxation app',
    startDate: 'Mar 14',
    endDate: 'Dec 21',
    status: {
      label: 'Upcoming',
      variant: ''
    },
    progress: {
      variant: 'progress-gray-300',
      value: 100
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-4.png'
      }, {
        filename: '300-2.png'
      }, {
        fallback: 'K',
        variant: 'text-success-inverse ring-success-light bg-success'
      }]
    }
  }, {
    logo: 'jira.svg',
    name: 'EmberX CRM',
    description: 'Commission-free stock trading',
    startDate: 'Mar 01',
    endDate: 'Dec 13',
    status: {
      label: 'Completed',
      variant: 'badge-success'
    },
    progress: {
      variant: 'progress-success',
      value: 100
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-12.png'
      }, {
        filename: '300-20.png'
      }, {
        filename: '300-3.png'
      }],
      more: {
        number: 5,
        variant: 'text-success-inverse ring-success-light bg-success'
      }
    }
  }, {
    logo: 'plastic-scm.svg',
    name: 'LunaLink',
    description: 'Meditation and relaxation app',
    startDate: 'Mar 14',
    endDate: 'Dec 21',
    status: {
      label: 'Upcoming',
      variant: ''
    },
    progress: {
      variant: 'progress-gray-300',
      value: 100
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-16.png'
      }]
    }
  }, {
    logo: 'perrier.svg',
    name: 'TerraCrest App',
    description: 'Video conferencing software',
    startDate: 'Mar 22',
    endDate: 'Dec 28',
    status: {
      label: 'In Progress',
      variant: 'badge-primary'
    },
    progress: {
      variant: 'progress-primary',
      value: 55
    },
    team: {
      size: 'size-[30px]',
      group: [{
        filename: '300-4.png'
      }, {
        filename: '300-9.png'
      }, {
        fallback: 'F',
        variant: 'text-primary-inverse ring-primary-light bg-primary'
      }]
    }
  }];
  const renderProject = (project, index) => {
    return <CardProject logo={project.logo} name={project.name} description={project.description} startDate={project.startDate} endDate={project.endDate} status={project.status} progress={project.progress} team={project.team} key={index} />;
  };
  const renderItem = (item, index) => {
    return <CardProjectRow logo={item.logo} name={item.name} description={item.description} status={item.status} progress={item.progress} team={item.team} key={index} />;
  };
  return <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-gray-900 font-semibold">{projects.length} Projects</h3>

        <div className="btn-tabs" data-tabs="true">
          <a href="#" className={`btn btn-icon btn-sm ${activeView === 'cards' ? 'active' : ''}`} data-tab-toggle="#projects_cards" onClick={() => {
          setActiveView('cards');
        }}>
            <KeenIcon icon="category" />
          </a>
          <a href="#" className={`btn btn-icon btn-sm ${activeView === 'list' ? 'active' : ''}`} data-tab-toggle="#projects_list" onClick={() => {
          setActiveView('list');
        }}>
            <KeenIcon icon="row-horizontal" />
          </a>
        </div>
      </div>

      {activeView === 'cards' && <div id="projects_cards">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7.5">
            {projects.map((project, index) => {
          return renderProject(project, index);
        })}
          </div>

          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <a href="#" className="btn btn-link">
              Show more projects
            </a>
          </div>
        </div>}

      {activeView === 'list' && <div id="projects_list">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            {projects.map((item, index) => {
          return renderItem(item, index);
        })}
          </div>

          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <a href="#" className="btn btn-link">
              Show more projects
            </a>
          </div>
        </div>}
    </div>;
};
export { Projects2 };