type GeneralFormData = {
  firstName: string;
  lastName: string;
  gnumber: string;
  phoneNumber: string;
  masonEmail: string;
  major: string;
  graduationDate: string;
  overallGPA: string;
  prevSemGPA: string;
  creditsLastSem: string;
  newUTA: string;
  prevUTAType: string;
  prevUTACourses: string;
  recommender: string;
  essay: string;
  preferredProfs: string;
};

type GeneralFormProps = GeneralFormData & {
  updateFields: (fields: Partial<GeneralFormData>) => void;
};

export const GeneralForm = ({
  firstName,
  lastName,
  gnumber,
  phoneNumber,
  masonEmail,
  major,
  graduationDate,
  overallGPA,
  prevSemGPA,
  creditsLastSem,
  newUTA,
  prevUTAType,
  prevUTACourses,
  recommender,
  essay,
  preferredProfs,
  updateFields,
}: GeneralFormProps) => {
  return (
    <div className="grid place-content-center pt-12">
      <h1 className="pb-12 text-center text-4xl font-bold text-secondary md:text-5xl">{`General Information:`}</h1>
      <div className="flex w-[100vw] max-w-3xl flex-col gap-2 p-2">
        <div className="flex flex-row gap-1">
          <div className="w-full">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              autoFocus
              required
              name="firstName"
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => updateFields({ firstName: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              required
              name="lastName"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => updateFields({ lastName: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="w-full">
            <label className="label">
              <span className="label-text">G-Number</span>
            </label>
            <input
              required
              name="gnumber"
              type="text"
              placeholder="G0123456"
              value={gnumber}
              onChange={(e) => updateFields({ gnumber: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              required
              name="phoneNumber"
              type="text"
              placeholder="(xxx)-xxx-xxxx)"
              value={phoneNumber}
              onChange={(e) => updateFields({ phoneNumber: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Mason Email</span>
          </label>
          <input
            required
            name="masonEmail"
            type="email"
            placeholder="jdoe2@gmu.edu"
            value={masonEmail}
            onChange={(e) => updateFields({ masonEmail: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
          />
        </div>
        <span className="divider"></span>
        <div className="flex flex-row gap-1">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Major</span>
            </label>
            <input
              required
              name="major"
              type="text"
              placeholder="APCS"
              value={major}
              onChange={(e) => updateFields({ major: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Expected Graduation Date</span>
            </label>
            <input
              required
              name="graduationDate"
              type="text"
              placeholder="May 2024"
              value={graduationDate}
              onChange={(e) => updateFields({ graduationDate: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Overall GPA</span>
            </label>
            <input
              required
              inputMode="decimal"
              name="overallGPA"
              type="text"
              placeholder="3.5"
              value={overallGPA}
              onChange={(e) => updateFields({ overallGPA: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Previous Semester GPA</span>
            </label>
            <input
              required
              inputMode="decimal"
              name="prevSemGPA"
              type="text"
              placeholder="4.0"
              value={prevSemGPA}
              onChange={(e) => updateFields({ prevSemGPA: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Credits Last Semester</span>
            </label>
            <input
              required
              inputMode="decimal"
              name="creditsLastSem"
              type="text"
              placeholder="15"
              value={creditsLastSem}
              onChange={(e) => updateFields({ creditsLastSem: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
        </div>
        <span className="divider"></span>
        <div className="flex w-full flex-col gap-1">
          <label className="label">
            <span className="label-text">Have you been a UTA before?</span>
          </label>
          <select
            required
            name="newUTA"
            value={newUTA}
            onChange={(e) => updateFields({ newUTA: e.target.value })}
            className="select-bordered select-primary select w-full rounded-none font-medium placeholder-base-content"
          >
            <option className="selected disabled">{`Please select an answer.`}</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* This will be displayed if they have been a UTA before */}
        {newUTA == "Yes" && (
          <div className="flex w-full flex-col gap-2">
            <span className="divider" />
            <div className="flex flex-row gap-1">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">What type of UTA were you?</span>
                </label>
                <input
                  name="prevUTAType"
                  type="text"
                  placeholder="CS"
                  value={prevUTAType}
                  onChange={(e) =>
                    updateFields({ prevUTAType: e.target.value })
                  }
                  className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
                />
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">
                    What courses have you been a UTA for?
                  </span>
                </label>
                <input
                  name="prevUTACourses"
                  type="text"
                  placeholder="CS112 SWE205"
                  value={prevUTACourses}
                  onChange={(e) =>
                    updateFields({ prevUTACourses: e.target.value })
                  }
                  className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
                />
              </div>
            </div>
          </div>
        )}
        {/* This will be displayed if the user has not */}
        {newUTA == "No" && (
          <div className="flex flex-col gap-2">
            <span className="divider"></span>
            <div className="w-full">
              <label className="label">
                <span className="label-text">
                  Which professor is recommending you?
                </span>
              </label>
              <input
                name="recommender"
                type="text"
                placeholder="Snyder"
                value={recommender}
                onChange={(e) => updateFields({ recommender: e.target.value })}
                className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Why do you want to be a UTA?</span>
              </label>
              <textarea
                name="essay"
                value={essay}
                onChange={(e) => updateFields({ essay: e.target.value })}
                className="input-bordered input-primary input textarea w-full rounded-none font-medium placeholder-base-content placeholder:italic"
                placeholder="Write your essay here, Max 200 words."
              ></textarea>
            </div>
          </div>
        )}
        {/* This will be displayed regarless. */}
        <div className="flex w-full flex-col gap-2">
          <span className="divider"></span>
          <div className="w-full">
            <label className="label">
              <span className="label-text">
                List your top 3 preferred professors.
              </span>
            </label>
            <input
              required
              name="preferredProfs"
              type="text"
              placeholder="Snyder Ammann Offutt"
              value={preferredProfs}
              onChange={(e) => updateFields({ preferredProfs: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
