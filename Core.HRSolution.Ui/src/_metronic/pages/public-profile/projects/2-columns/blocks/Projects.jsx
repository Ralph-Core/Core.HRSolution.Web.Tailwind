import { useState } from 'react';
import { KeenIcon } from '@/_metronic/components';
import { CardProjectExtended, CardProjectExtendedRow } from '@/_metronic/partials/cards';
const Projects = () => {
  const [activeView, setActiveView] = useState('cards');
  const projects = [{
    status: {
      variant: 'badge-primary',
      label: 'In Progress'
    },
    logo: 'office.svg',
    title: 'Phoenix SaaS',
    description: 'Cloud storage and file sharing',
    team: {
      size: 'size-7',
      group: [{
        filename: '300-4.png'
      }, {
        filename: '300-1.png'
      }, {
        filename: '300-2.png'
      }, {
        fallback: 'S',
        variant: 'text-primary-inverse ring-primary-light bg-primary'
      }]
    },
    statistics: [{
      total: '1-3 months',
      description: 'Duration'
    }, {
      total: 'Flexible',
      description: 'Location'
    }, {
      total: '$65 hour',
      description: 'Rate'
    }],
    progress: {
      variant: 'progress-primary',
      value: 60
    }
  }, {
    status: {
      variant: '',
      label: 'Upcoming'
    },
    logo: 'btcchina.svg',
    title: 'Golden Gate Analytics',
    description: 'Team communication and collaboration tool',
    team: {
      size: 'size-7',
      group: [{
        filename: '300-5.png'
      }, {
        filename: '300-17.png'
      }, {
        filename: '300-16.png'
      }]
    },
    statistics: [{
      total: '2-4 months',
      description: 'Duration'
    }, {
      total: 'Global',
      description: 'Location'
    }, {
      total: '$25 hour',
      description: 'Rate'
    }],
    progress: {
      variant: 'progress-primary',
      value: 20
    }
  }, {
    status: {
      variant: '',
      label: 'Upcoming'
    },
    logo: 'jira.svg',
    title: 'SparkleTech',
    description: 'Short-term accommodation marketplace',
    team: {
      size: 'size-7',
      group: [{
        filename: '300-19.png'
      }, {
        filename: '300-9.png'
      }]
    },
    statistics: [{
      total: '3-5 months',
      description: 'Duration'
    }, {
      total: 'Remote',
      description: 'Location'
    }, {
      total: '$16 hour',
      description: 'Rate'
    }],
    progress: {
      variant: 'progress-primary',
      value: 25
    }
  }, {
    status: {
      variant: 'badge-success',
      label: 'Completed'
    },
    logo: 'equacoin.svg',
    title: 'Nexus Design System',
    description: 'Visual discovery and inspiration',
    team: {
      size: 'size-7',
      group: [{
        filename: '300-5.png'
      }, {
        filename: '300-11.png'
      }, {
        fallback: 'W',
        variant: 'text-warning-inverse ring-warning-light bg-warning'
      }]
    },
    statistics: [{
      total: '2-6 months',
      description: 'Duration'
    }, {
      total: 'Onsite',
      description: 'Location'
    }, {
      total: '$45 hour',
      description: 'Rate'
    }],
    progress: {
      variant: 'progress-success',
      value: 100
    }
  }, {
    status: {
      variant: 'badge-success',
      label: 'Completed'
    },
    logo: 'slack.svg',
    title: 'Neptune App',
    description: 'Peer-to-peer mobile payment service',
    team: {
      size: 'size-7',
      group: [{
        filename: '300-17.png'
      }, {
        filename: '300-1.png'
      }, {
        filename: '300-19.png'
      }, {
        fallback: 'P',
        variant: 'text-info-inverse ring-info-light bg-info'
      }]
    },
    statistics: [{
      total: '3-8 months',
      description: 'Duration'
    }, {
      total: 'Flexible',
      description: 'Location'
    }, {
      total: '$34 hour',
      description: 'Rate'
    }],
    progress: {
      variant: 'progress-success',
      value: 100
    }
  }, {
    status: {
      variant: 'badge-primary',
      label: 'In Progress'
    },
    logo: 'grab.svg',
    title: 'Radiant Wave',
    description: 'Team communication and collaboration',
    team: {
      size: 'size-7',
      group: [{
        filename: '300-24.png'
      }, {
        filename: '300-7.png'
      }, {
        filename: '300-9.png'
      }, {
        fallback: 'S',
        variant: 'text-primary-inverse ring-primary-light bg-primary'
      }]
    },
    statistics: [{
      total: '2-5 months',
      description: 'Duration'
    }, {
      total: 'Remote',
      description: 'Location'
    }, {
      total: '$33 hour',
      description: 'Rate'
    }],
    progress: {
      variant: 'progress-primary',
      value: 20
    }
  }];
  const renderProject = (project, index) => {
    return <CardProjectExtended status={project.status} logo={project.logo} title={project.title} description={project.description} team={project.team} statistics={project.statistics} progress={project.progress} url="#" key={index} />;
  };
  const renderItem = (item, index) => {
    return <CardProjectExtendedRow status={item.status} logo={item.logo} title={item.title} description={item.description} team={item.team} statistics={item.statistics} url="#" key={index} />;
  };
  return <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-gray-900 font-semibold">{projects.length} Projects</h3>

        <div className="btn-tabs" data-tabs="true">
          <a href="#" className={`btn btn-icon ${activeView === 'cards' ? 'active' : ''}`} data-tab-toggle="#projects_cards" onClick={() => {
          setActiveView('cards');
        }}>
            <KeenIcon icon="category" />
          </a>
          <a href="#" className={`btn btn-icon ${activeView === 'list' ? 'active' : ''}`} data-tab-toggle="#projects_list" onClick={() => {
          setActiveView('list');
        }}>
            <KeenIcon icon="row-horizontal" />
          </a>
        </div>
      </div>

      {activeView === 'cards' && <div id="projects_cards">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
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
export { Projects };