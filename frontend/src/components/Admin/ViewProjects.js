import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listProjects } from "../../actions/projectsActions";

const ProjectsView = () => {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { loading, projects, error } = projectList;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  console.log("checkprojects",projects)

  return (
    <div className="card p-5">
      <h2 className="m-3" style={{ fontSize: "45px", color: "#57aade" }}>
        Our Available Projects
      </h2>
      <div
        className="card-header"
        style={{ fontSize: "20px", background: "#f7f7f7" }}
      >
        Online platforms provide a unique opportunity to support critical water
        projects around the world. From drilling wells in areas without access
        to clean drinking water to implementing water conservation initiatives
        in drought-prone regions, these projects are crucial to improving the
        quality of life for communities in need. By contributing to a water
        project that resonates with you, you can play a vital role in ensuring
        that everyone has access to this essential resource. Join the movement
        and help make a difference today.
      </div>
      <div className="container">
        <div className="accordion" id="accordionExample">
          {projects &&
            projects.map((p) => (
              <div className="card" key={p._id}>
                <div
                  className="card-header"
                  id={"heading" + p._id}
                  data-toggle="collapse"
                  data-target={"#collapse" + p._id}
                  aria-expanded="true"
                  aria-controls={"collapse" + p._id}
                  style={{ background: "#f7f7f7", cursor: "pointer" }}
                >
                  <h5 className="mb-0">{p.name}</h5>
                </div>

                <div
                  id={"collapse" + p._id}
                  className="collapse"
                  aria-labelledby={"heading" + p._id}
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <img
                      src={p.photo}
                      className="card-img-top"
                      alt="Card image cap"
                    />
                    <p className="card-text">{p.description}</p>
                    <p className="card-text">{p.price}</p>
                    <a href="/selection" className="btn btn-primary">
                      Donate
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
