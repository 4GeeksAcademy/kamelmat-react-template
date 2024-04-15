import React from "react";

const Badges = () => {
return(
<div className="d-flex gap-2 justify-content-center py-1">
  <span className="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary border border-primary-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Primary
  </span>
  <span className="badge d-flex align-items-center p-1 pe-2 text-secondary-emphasis bg-secondary border border-secondary-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Secondary
  </span>
  <span className="badge d-flex align-items-center p-1 pe-2 text-success-emphasis bg-success border border-success-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Success
  </span>
  <span className="badge d-flex align-items-center p-1 pe-2 text-danger-emphasis bg-danger border border-danger-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Danger
  </span>
  <span className="badge d-flex align-items-center p-1 pe-2 text-warning-emphasis bg-warning border border-warning-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Warning
  </span>
  <span className="badge d-flex align-items-center p-1 pe-2 text-info-emphasis bg-info border border-info-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Info
  </span>
  <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-light border border-dark-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Light
  </span>
  <span className="badge d-flex align-items-center p-1 pe-2 text-dark-emphasis bg-dark border border-dark-subtle rounded-pill">
    <img className="rounded-circle me-1" width="24" height="24" src="https://github.com/mdo.png" alt=""/>Dark
  </span>
</div>
);

};

export default Badges;