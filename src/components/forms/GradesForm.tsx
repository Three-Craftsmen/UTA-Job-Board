type GradesFormData = {
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

type GradesFormProps = GradesFormData & {
  updateFields: (fields: Partial<GradesFormData>) => void;
};

export const GradesForm = ({
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
}: GradesFormProps) => {
  return (
    <div className="grid place-content-center pt-12">
      <h1 className="pb-12 text-center text-4xl font-bold text-secondary md:text-5xl">{`Grades Info:`}</h1>
      <div className="flex w-[100vw] max-w-3xl flex-col gap-2 p-2">
        <div className="flex flex-row gap-1">
          <input
            autoFocus
            required
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            required
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <div className="flex flex-row gap-1">
          <input
            required
            name="gnumber"
            type="text"
            placeholder="G-Number"
            value={gnumber}
            onChange={(e) => updateFields({ gnumber: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            required
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => updateFields({ phoneNumber: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <input
          required
          name="masonEmail"
          type="email"
          placeholder="Mason Email"
          value={masonEmail}
          onChange={(e) => updateFields({ masonEmail: e.target.value })}
          className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
        />
        <span className="divider"></span>
        <div className="flex flex-row gap-1">
          <input
            required
            name="major"
            type="text"
            placeholder="Major"
            value={major}
            onChange={(e) => updateFields({ major: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            required
            name="graduationDate"
            type="text"
            placeholder="Expected Graduation Date"
            value={graduationDate}
            onChange={(e) => updateFields({ graduationDate: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
        <div className="flex flex-row gap-1">
          <input
            required
            name="overallGPA"
            type="float"
            placeholder="Overall GPA"
            value={overallGPA}
            onChange={(e) => updateFields({ overallGPA: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            required
            name="prevSemGPA"
            type="float"
            placeholder="Previous Semester GPA"
            value={prevSemGPA}
            onChange={(e) => updateFields({ prevSemGPA: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
          <input
            required
            name="creditsLastSem"
            type="float"
            placeholder="# Credits Last Semester"
            value={creditsLastSem}
            onChange={(e) => updateFields({ creditsLastSem: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
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
              <input
                name="prevUTAType"
                type="text"
                placeholder="What type of UTA were you?"
                value={prevUTAType}
                onChange={(e) => updateFields({ prevUTAType: e.target.value })}
                className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
              />
              <input
                name="prevUTACourses"
                type="text"
                placeholder="What courses have you been a UTA for?"
                value={prevUTACourses}
                onChange={(e) =>
                  updateFields({ prevUTACourses: e.target.value })
                }
                className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
              />
            </div>
          </div>
        )}
        {/* This will be displayed if the user has not */}
        {newUTA == "No" && (
          <div className="flex flex-col gap-2">
            <span className="divider"></span>
            <input
              name="recommender"
              type="text"
              placeholder="Which professor is recommending you?"
              value={recommender}
              onChange={(e) => updateFields({ recommender: e.target.value })}
              className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
            />
            <textarea
              name="essay"
              value={essay}
              onChange={(e) => updateFields({ essay: e.target.value })}
              className="input-bordered input-primary input textarea w-full rounded-none font-medium placeholder-base-content"
              placeholder="Why do you want to be a UTA?"
            ></textarea>
          </div>
        )}
        <div className="flex w-full flex-col gap-2">
          <span className="divider"></span>
          <input
            required
            name="preferredProfs"
            type="text"
            placeholder="Please list your preferred professors."
            value={preferredProfs}
            onChange={(e) => updateFields({ preferredProfs: e.target.value })}
            className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content"
          />
        </div>
      </div>
    </div>
  );
};
