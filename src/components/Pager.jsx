import React from "react";

const Pager = (props) => {
  if (props.totalPages <= 1) return null;
  const previousPage = props.page > 1 ? props.page - 1 : null;
  const nextPage = props.page < props.totalPages ? props.page + 1 : null;

  const goToPage = (page) => {
    if (page < 1) {
      props.goToPage(1);
    } else if (page > props.totalPages) {
      props.goToPage(props.totalPages);
    } else {
      props.goToPage(page);
    }
  };
  const button = (page, current) => {
    const label = `Idź do strony ${page}`;

    const classes =
      page === current
        ? "pagination-link  has-text-white is-current"
        : "pagination-link  has-text-white";

    const aria = page === current ? page : null;

    if (page) {
      return (
        <li title="Idź do strony">
          <a
            className={classes}
            aria-label={label}
            aria-current={aria}
            onClick={() => goToPage(page)}
          >
            {page}
          </a>
        </li>
      );
    } else {
      return null;
    }
  };

  const previousButton = (page) => {
    return (
      <a
        className="pagination-previous has-text-white"
        onClick={() => goToPage(page)}
        title="Idź do poprzedniej strony"
      >
        Poprzednia strona
      </a>
    );
  };

  const dots = () => {
    return (
      <li>
        <span className="pagination-ellipsis">&hellip;</span>
      </li>
    );
  };

  const nextButton = (page) => {
    return (
      <a
        className="pagination-next has-text-white"
        onClick={() => goToPage(page)}
        title="Idź do następnej strony"
      >
        Następna strona
      </a>
    );
  };

  const isFirstButton = props.page === 1 ? false : true;
  const firstDots = [1, 2, 3].indexOf(props.page) !== -1 ? false : true;
  const lastDots =
    [props.totalPages - 2, props.totalPages - 1, props.totalPages].indexOf(
      props.page
    ) !== -1
      ? false
      : true;
  const isPreviousButton = previousPage === 1 ? false : true;
  const isNextButton = nextPage === props.totalPages ? false : true;
  const isLastButton = props.page === props.totalPages ? false : true;

  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      {previousButton(previousPage)}
      {nextButton(nextPage)}
      <ul className="pagination-list">
        {isFirstButton ? button(1) : false}
        {firstDots ? dots() : false}
        {isPreviousButton ? button(previousPage) : false}
        {button(props.page, props.page)}
        {isNextButton ? button(nextPage) : false}
        {lastDots ? dots() : false}
        {isLastButton ? button(props.totalPages) : null}
      </ul>
    </nav>
  );
};

export default Pager;
