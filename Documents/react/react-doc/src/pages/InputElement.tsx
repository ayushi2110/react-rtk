import { useState, type ChangeEvent } from "react";

function InputElement() {
  const [skills, setSkills] = useState<string[]>([]);
  const [gender, setGender] = useState<string>("female");

  const chooseSkill = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSkills((prevSkills) => {
      if (checked) {
        return [...prevSkills, value];
      }

      return prevSkills.filter((skill) => skill !== value);
    });
  };
  return (
    <>
      <div className="form-check">
        <div>
          <h4>Select your skill</h4>

          <div className="skill-option">
            <input
              onChange={chooseSkill}
              type="checkbox"
              id="node"
              value="node"
            />
            <label htmlFor="node">Node</label>
          </div>

          <div className="skill-option">
            <input
              onChange={chooseSkill}
              type="checkbox"
              id="python"
              value="python"
            />
            <label htmlFor="python">Python</label>
          </div>

          <div className="skill-option">
            <input onChange={chooseSkill} type="checkbox" id="go" value="go" />
            <label htmlFor="go">Go</label>
          </div>

          <div className="skill-option">
            <input
              onChange={chooseSkill}
              type="checkbox"
              id="php"
              value="php"
            />
            <label htmlFor="php">PHP</label>
          </div>
          <h1>{skills.toString()}</h1>
        </div>

        <div className="form-check">
          <div>
            <h4>Radio button</h4>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={(event) => setGender(event.target.value)}
                name="gender"
                value={"male"}
                id="male"
                checked={gender == "male"}
              ></input>
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                onChange={(event) => setGender(event.target.value)}
                name="gender"
                value={"female"}
                id="female"
                checked={gender == "female"}
              ></input>
              <label className="form-check-label">Female</label>
            </div>

            <h4>Selected Gender: {gender}</h4>
          </div>
        </div>

        <div>
          <h1>Dropdown</h1>
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputElement;
