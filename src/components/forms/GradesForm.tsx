import { type Course } from "~/types/types";

type GradesFormData = {
  courses: Course[];
  preferredCourses: string;
};

type GradesFormProps = GradesFormData & {
  updateFields: (fields: Partial<GradesFormData>) => void;
} & {
  updateCourses: (
    field: string,
    name: string | undefined,
    target: string
  ) => void;
};

export const GradesForm = ({
  updateFields,
  updateCourses,
  courses,
  preferredCourses,
}: GradesFormProps) => {
  const csCourses = courses.filter((course) => course.name?.includes("CS"));
  const cs100level: Course[] = [];
  csCourses.forEach((course, i) => {
    if (course.name?.split(" ")[1]?.charAt(0) == "1") {
      cs100level[i] = course;
    }
  });
  const cs200level: Course[] = [];
  csCourses.forEach((course, i) => {
    if (course.name?.split(" ")[1]?.charAt(0) == "2") {
      cs200level[i] = course;
    }
  });
  const cs300level: Course[] = [];
  csCourses.forEach((course, i) => {
    if (course.name?.split(" ")[1]?.charAt(0) == "3") {
      cs300level[i] = course;
    }
  });
  const cs400level: Course[] = [];
  csCourses.forEach((course, i) => {
    if (course.name?.split(" ")[1]?.charAt(0) == "4") {
      cs400level[i] = course;
    }
  });
  const sweCourses: Course[] = courses.filter((course) =>
    course.name?.includes("SWE")
  );
  const swe200level: Course[] = [];
  sweCourses.forEach((course, i) => {
    if (course.name?.split(" ")[1]?.charAt(0) == "2") {
      swe200level[i] = course;
    }
  });
  const swe400level: Course[] = [];
  sweCourses.forEach((course, i) => {
    if (course.name?.split(" ")[1]?.charAt(0) == "4") {
      swe400level[i] = course;
    }
  });

  const pickedCourses: Course[] = [];
  courses.forEach((course) => {
    if (course.interested == "Yes") {
      pickedCourses.push(course);
    }
  });

  return (
    <div className="grid place-content-center pt-12">
      <h1 className="pb-12 text-center text-4xl font-bold text-secondary md:text-5xl">{`Apply For Courses:`}</h1>
      <p className="max-w-2xl text-center text-lg italic">{`If you're interested in a course, click the checkbox and select the grade you recieved. You can apply to as many courses as you want. You may only be selected for one.`}</p>
      <div className="flex w-[100vw] max-w-3xl flex-col p-2">
        <span className="divider"></span>
        {/* CS 100 Level */}
        <div className="collapse-open collapse bg-base-100">
          <input type="radio" name="" />
          <div className="collapse-title text-2xl font-bold">
            100 Level CS Courses
          </div>
          {/* 100 Level Selections */}
          <div className="collapse-content">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cs100level.map((course) => (
                <div
                  key={course.name}
                  className="flex w-80 bg-base-200 bg-opacity-20 p-4 shadow-2xl"
                >
                  <div className="flex w-full flex-col">
                    <div className="flex flex-col gap-1">
                      {/* Intersest Checkbox */}
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text w-full text-xl">
                            {course.name}
                          </span>
                          <input
                            type="checkbox"
                            checked={course.interested?.includes("Yes")}
                            onChange={(e) => {
                              if (e.target.checked == true) {
                                updateCourses("interested", course.name, "Yes");
                              } else if (e.target.checked == false) {
                                updateCourses("interested", course.name, "No");
                              }
                            }}
                            className="checkbox-secondary checkbox"
                          />
                        </label>
                      </div>
                      {/* Grade Select */}
                      <div className="flex flex-col gap-0">
                        <label className="label">
                          <span className="label-text w-full text-sm">
                            Grade Recieved:
                          </span>
                        </label>
                        <select
                          required
                          name=""
                          value={course.grade}
                          onChange={(e) =>
                            updateCourses("grade", course.name, e.target.value)
                          }
                          className="disabled select-ghost select select-sm w-full rounded-none font-medium placeholder-base-content"
                        >
                          <option className="selected disabled">{`Select`}</option>
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="B-">B-</option>
                          <option value="C+">C+</option>
                          <option value="C">C</option>
                        </select>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <span className="divider"></span>
        {/* CS 200 Level */}
        <div className="collapse-open collapse bg-base-100">
          <input type="radio" name="" />
          <div className="collapse-title text-2xl font-bold">
            200 Level CS Courses
          </div>
          {/* 200 Level Selections */}
          <div className="collapse-content">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cs200level.map((course) => (
                <div
                  key={course.name}
                  className="flex w-80 bg-base-200 bg-opacity-20 p-4 shadow-2xl"
                >
                  <div className="flex w-full flex-col">
                    <div className="flex flex-col gap-1">
                      {/* Intersest Checkbox */}
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text w-full text-xl">
                            {course.name}
                          </span>
                          <input
                            type="checkbox"
                            checked={course.interested?.includes("Yes")}
                            onChange={(e) => {
                              if (e.target.checked == true) {
                                updateCourses("interested", course.name, "Yes");
                              } else if (e.target.checked == false) {
                                updateCourses("interested", course.name, "No");
                              }
                            }}
                            className="checkbox-secondary checkbox"
                          />
                        </label>
                      </div>
                      {/* Grade Select */}
                      <div className="flex flex-col gap-0">
                        <label className="label">
                          <span className="label-text w-full text-sm">
                            Grade Recieved:
                          </span>
                        </label>
                        <select
                          required
                          name=""
                          value={course.grade}
                          onChange={(e) =>
                            updateCourses("grade", course.name, e.target.value)
                          }
                          className="disabled select-ghost select select-sm w-full rounded-none font-medium placeholder-base-content"
                        >
                          <option className="selected disabled">{`Select`}</option>
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="B-">B-</option>
                          <option value="C+">C+</option>
                          <option value="C">C</option>
                        </select>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <span className="divider"></span>

        {/* CS 300 Level */}
        <div className="collapse-open collapse bg-base-100">
          <input type="radio" name="" />
          <div className="collapse-title text-2xl font-bold">
            300 Level CS Courses
          </div>
          {/* 300 Level Selections */}
          <div className="collapse-content">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cs300level.map((course) => (
                <div
                  key={course.name}
                  className="flex w-80 bg-base-200 bg-opacity-20 p-4 shadow-2xl"
                >
                  <div className="flex w-full flex-col">
                    <div className="flex flex-col gap-1">
                      {/* Intersest Checkbox */}
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text w-full text-xl">
                            {course.name}
                          </span>
                          <input
                            type="checkbox"
                            checked={course.interested?.includes("Yes")}
                            onChange={(e) => {
                              if (e.target.checked == true) {
                                updateCourses("interested", course.name, "Yes");
                              } else if (e.target.checked == false) {
                                updateCourses("interested", course.name, "No");
                              }
                            }}
                            className="checkbox-secondary checkbox"
                          />
                        </label>
                      </div>
                      {/* Grade Select */}
                      <div className="flex flex-col gap-0">
                        <label className="label">
                          <span className="label-text w-full text-sm">
                            Grade Recieved:
                          </span>
                        </label>
                        <select
                          required
                          name=""
                          value={course.grade}
                          onChange={(e) =>
                            updateCourses("grade", course.name, e.target.value)
                          }
                          className="disabled select-ghost select select-sm w-full rounded-none font-medium placeholder-base-content"
                        >
                          <option className="selected disabled">{`Select`}</option>
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="B-">B-</option>
                          <option value="C+">C+</option>
                          <option value="C">C</option>
                        </select>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <span className="divider"></span>

        {/* CS 400 Level */}
        <div className="collapse-open collapse bg-base-100">
          <input type="radio" name="" />
          <div className="collapse-title text-2xl font-bold">
            400 Level CS Courses
          </div>
          {/* 400 Level Selections */}
          <div className="collapse-content">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {cs400level.map((course) => (
                <div
                  key={course.name}
                  className="flex w-80 bg-base-200 bg-opacity-20 p-4 shadow-2xl"
                >
                  <div className="flex w-full flex-col">
                    <div className="flex flex-col gap-1">
                      {/* Intersest Checkbox */}
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text w-full text-xl">
                            {course.name}
                          </span>
                          <input
                            type="checkbox"
                            checked={course.interested?.includes("Yes")}
                            onChange={(e) => {
                              if (e.target.checked == true) {
                                updateCourses("interested", course.name, "Yes");
                              } else if (e.target.checked == false) {
                                updateCourses("interested", course.name, "No");
                              }
                            }}
                            className="checkbox-secondary checkbox"
                          />
                        </label>
                      </div>
                      {/* Grade Select */}
                      <div className="flex flex-col gap-0">
                        <label className="label">
                          <span className="label-text w-full text-sm">
                            Grade Recieved:
                          </span>
                        </label>
                        <select
                          required
                          name=""
                          value={course.grade}
                          onChange={(e) =>
                            updateCourses("grade", course.name, e.target.value)
                          }
                          className="disabled select-ghost select select-sm w-full rounded-none font-medium placeholder-base-content"
                        >
                          <option className="selected disabled">{`Select`}</option>
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="B-">B-</option>
                          <option value="C+">C+</option>
                          <option value="C">C</option>
                        </select>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <span className="divider"></span>

        {/* SWE 200 Level */}
        <div className="collapse-open collapse bg-base-100">
          <input type="radio" name="" />
          <div className="collapse-title text-2xl font-bold">
            200 Level SWE Courses
          </div>
          {/* 200 Level Selections */}
          <div className="collapse-content">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {swe200level.map((course) => (
                <div
                  key={course.name}
                  className="flex w-80 bg-base-200 bg-opacity-20 p-4 shadow-2xl"
                >
                  <div className="flex w-full flex-col">
                    <div className="flex flex-col gap-1">
                      {/* Intersest Checkbox */}
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text w-full text-xl">
                            {course.name}
                          </span>
                          <input
                            type="checkbox"
                            checked={course.interested?.includes("Yes")}
                            onChange={(e) => {
                              if (e.target.checked == true) {
                                updateCourses("interested", course.name, "Yes");
                              } else if (e.target.checked == false) {
                                updateCourses("interested", course.name, "No");
                              }
                            }}
                            className="checkbox-secondary checkbox"
                          />
                        </label>
                      </div>
                      {/* Grade Select */}
                      <div className="flex flex-col gap-0">
                        <label className="label">
                          <span className="label-text w-full text-sm">
                            Grade Recieved:
                          </span>
                        </label>
                        <select
                          required
                          name=""
                          value={course.grade}
                          onChange={(e) =>
                            updateCourses("grade", course.name, e.target.value)
                          }
                          className="disabled select-ghost select select-sm w-full rounded-none font-medium placeholder-base-content"
                        >
                          <option className="selected disabled">{`Select`}</option>
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="B-">B-</option>
                          <option value="C+">C+</option>
                          <option value="C">C</option>
                        </select>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <span className="divider"></span>

        {/* SWE 400 Level */}
        <div className="collapse-open collapse bg-base-100">
          <input type="radio" name="" />
          <div className="collapse-title text-2xl font-bold">
            400 Level SWE Courses
          </div>
          {/* 400 Level Selections */}
          <div className="collapse-content">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {swe400level.map((course) => (
                <div
                  key={course.name}
                  className="flex w-80 bg-base-200 bg-opacity-20 p-4 shadow-2xl"
                >
                  <div className="flex w-full flex-col">
                    <div className="flex flex-col gap-1">
                      {/* Intersest Checkbox */}
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <span className="label-text w-full text-xl">
                            {course.name}
                          </span>
                          <input
                            type="checkbox"
                            checked={course.interested?.includes("Yes")}
                            onChange={(e) => {
                              if (e.target.checked == true) {
                                updateCourses("interested", course.name, "Yes");
                              } else if (e.target.checked == false) {
                                updateCourses("interested", course.name, "No");
                              }
                            }}
                            className="checkbox-secondary checkbox"
                          />
                        </label>
                      </div>
                      {/* Grade Select */}
                      <div className="flex flex-col gap-0">
                        <label className="label">
                          <span className="label-text w-full text-sm">
                            Grade Recieved:
                          </span>
                        </label>
                        <select
                          required
                          name=""
                          value={course.grade}
                          onChange={(e) =>
                            updateCourses("grade", course.name, e.target.value)
                          }
                          className="disabled select-ghost select select-sm w-full rounded-none font-medium placeholder-base-content"
                        >
                          <option className="selected disabled">{`Select`}</option>
                          <option value="A+">A+</option>
                          <option value="A">A</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B">B</option>
                          <option value="B-">B-</option>
                          <option value="C+">C+</option>
                          <option value="C">C</option>
                        </select>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <span className="divider"></span>

        <div>
          <h1 className="p-4 text-xl">Courses you selected:</h1>
          <div className="flex flex-wrap gap-4 px-4">
            {pickedCourses.map((course) => (
              <div
                key={course.name}
                className="flex flex-row gap-4 bg-base-200 bg-opacity-20 p-2 shadow-2xl"
              >
                <h2>{course.name}:</h2>
                <h3>{course.grade}</h3>
              </div>
            ))}
          </div>
        </div>

        <span className="divider"></span>

        <div className="w-full">
          <label className="label">
            <span className="label-text text-lg">
              List your top 3 preferred courses.
            </span>
          </label>
          <input
            required
            name="preferredCourses"
            type="text"
            placeholder="CS112 CS262 CS367"
            value={preferredCourses}
            onChange={(e) => updateFields({ preferredCourses: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
          />
        </div>
      </div>
    </div>
  );
};
