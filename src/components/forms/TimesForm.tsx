import {
  type Duty,
  type OncampusBlock,
  type OnlineBlock,
} from "@prisma/client";

type TimesFormData = {
  preferredDuties: Duty[];
  minHours: string;
  maxHours: string;
  idealHours: string;
  oncampusAvailability: OncampusBlock[];
  onlineAvailibility: OnlineBlock[];
};

type TimesFormProps = TimesFormData & {
  updateFields: (fields: Partial<TimesFormData>) => void;
};

export const TimesForm = ({
  preferredDuties,
  minHours,
  maxHours,
  idealHours,
  oncampusAvailability,
  onlineAvailibility,
  updateFields,
}: TimesFormProps) => {
  return (
    <div className="grid place-content-center pt-12">
      <h1 className="pb-12 text-center text-4xl font-bold text-secondary md:text-5xl">{`Duties and Times:`}</h1>
      <div className="grid w-[100vw] max-w-3xl place-items-center gap-8 p-2">
        <div className="flex flex-col gap-8 md:flex-row md:gap-20">
          {/* Preffered Duties */}
          <div className="grid w-full max-w-sm place-items-center bg-base-200 bg-opacity-20 p-2 shadow-2xl">
            <h1 className="p-1 text-3xl font-semibold">Preffered Duties</h1>
            <p className="text-center text-sm italic">
              Place a ✓ next to tasks you want to do.
            </p>
            {/* Map over Duties Here */}
            {/* Each one should look like: */}
            <div className="w-full p-2">
              <div className="form-control w-full">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg">Lab Assistance</span>
                  <input
                    type="checkbox"
                    className="checkbox-secondary checkbox"
                  />
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="form-control w-full">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg">Piazza Time Blocks</span>
                  <input
                    type="checkbox"
                    className="checkbox-secondary checkbox"
                  />
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="form-control w-full">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg">Review Sessions</span>
                  <input
                    type="checkbox"
                    className="checkbox-secondary checkbox"
                  />
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="form-control w-full">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg">Office Hours</span>
                  <input
                    type="checkbox"
                    className="checkbox-secondary checkbox"
                  />
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="form-control w-full">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg">Coding Assignments</span>
                  <input
                    type="checkbox"
                    className="checkbox-secondary checkbox"
                  />
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="form-control w-full">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg">Running Tests</span>
                  <input
                    type="checkbox"
                    className="checkbox-secondary checkbox"
                  />
                </label>
              </div>
            </div>
            <div className="w-full p-2">
              <div className="form-control w-full">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg">Other</span>
                  <input
                    type="checkbox"
                    className="checkbox-secondary checkbox"
                  />
                </label>
              </div>
            </div>
            {false && (
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Please Specify</span>
                </label>
                <input
                  required
                  name="preferredProfs"
                  type="text"
                  placeholder="In class UTA"
                  value=""
                  className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
                />
              </div>
            )}
          </div>
          {/* Hours */}
          <div className="grid w-full max-w-sm place-items-center bg-base-200 bg-opacity-20 p-2 shadow-2xl">
            <h1 className="p-1 text-3xl font-semibold">Hours</h1>
            <p className="text-center text-sm italic">
              Enter your desired number of hours in each box.
            </p>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-xl">Minimum Hours</span>
              </label>
              <input
                required
                inputMode="decimal"
                name="minHours"
                type="text"
                placeholder="e.g. 5"
                value={minHours}
                onChange={(e) => updateFields({ minHours: e.target.value })}
                className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-xl">Ideal Hours</span>
              </label>
              <input
                required
                inputMode="decimal"
                name="idealHours"
                type="text"
                placeholder="e.g. 15"
                value={idealHours}
                onChange={(e) => updateFields({ idealHours: e.target.value })}
                className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text text-xl">Maximum Hours</span>
              </label>
              <input
                required
                inputMode="decimal"
                name="maxHours"
                type="text"
                placeholder="e.g. 30"
                value={maxHours}
                onChange={(e) => updateFields({ maxHours: e.target.value })}
                className="input-bordered input-primary input w-full rounded-none font-medium placeholder-base-content placeholder:italic"
              />
            </div>
          </div>
        </div>
        <div className="grid w-full max-w-2xl place-items-center bg-base-200 bg-opacity-20 p-2 shadow-2xl">
          <h1 className="text-3xl font-semibold">On-Campus Availibility</h1>
          <p className="p-4 text-sm italic">
            Fill in the boxes that you <span className="text-warning">can</span>{" "}
            assist on campus.
          </p>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>8:00 am</th>
                  <td>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-lg w-12"
                    />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>8:30 am</th>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>9:00 am</th>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-lg" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
