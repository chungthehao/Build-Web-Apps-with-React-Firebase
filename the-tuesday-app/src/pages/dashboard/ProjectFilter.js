const filterList = ['all', 'mine', 'development', 'design', 'marketing', 'sales']

function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (f) => {
    changeFilter(f)
  }

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map(f => (
          <button 
            key={f}
            onClick={() => handleClick(f)} 
            className={f === currentFilter ? 'active' : ''}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default ProjectFilter;