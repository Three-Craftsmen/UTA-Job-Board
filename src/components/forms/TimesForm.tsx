import {
  type Duty,
  type OncampusBlock,
  type OnlineBlock,
} from "@prisma/client";

type TimesFormData = {
  duties: Duty[];
  onCampusBlocks: OncampusBlock[];
  onlineBlocks: OnlineBlock[];
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
  duties,
  onCampusBlocks,
  onlineBlocks,
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
            {/* Map over Duties */}
            {duties.map((duty) => (
              <div key={duty.name} className="w-[90%] p-2">
                <div className="form-control w-full">
                  <label className="label cursor-pointer">
                    <span className="label-text text-lg">{duty.name}</span>
                    <input
                      type="checkbox"
                      className="checkbox-secondary checkbox"
                    />
                  </label>
                </div>
              </div>
            ))}
            {false && (
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Please Specify</span>
                </label>
                <input
                  required
                  name="other"
                  type="text"
                  placeholder="In class assistance"
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
            <table className="table-lg table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="font-semibold text-base-content">Mon.</th>
                  <th className="font-semibold text-base-content">Tues.</th>
                  <th className="font-semibold text-base-content">Wed.</th>
                  <th className="font-semibold text-base-content">Thur.</th>
                  <th className="font-semibold text-base-content">Fri.</th>
                </tr>
              </thead>
              <tbody>
                {/* Loop over times */}
                {onCampusBlocks.map((time) => (
                  <tr key={time.time}>
                    <th>{time.time}</th>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />{" "}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />{" "}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />{" "}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid w-full max-w-2xl place-items-center bg-base-200 bg-opacity-20 p-2 shadow-2xl">
          <h1 className="text-3xl font-semibold">Online Availibility</h1>
          <p className="p-4 text-sm italic">
            Fill in the boxes that you <span className="text-warning">can</span>{" "}
            assist online.
          </p>
          <div className="overflow-x-auto">
            <table className="table-lg table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="font-semibold text-base-content">Mon.</th>
                  <th className="font-semibold text-base-content">Tues.</th>
                  <th className="font-semibold text-base-content">Wed.</th>
                  <th className="font-semibold text-base-content">Thur.</th>
                  <th className="font-semibold text-base-content">Fri.</th>
                </tr>
              </thead>
              <tbody>
                {/* Loop over times */}
                {onlineBlocks.map((time) => (
                  <tr key={time.time}>
                    <th>{time.time}</th>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />{" "}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />{" "}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />{" "}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-lg w-14 rounded-none"
                      />{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
