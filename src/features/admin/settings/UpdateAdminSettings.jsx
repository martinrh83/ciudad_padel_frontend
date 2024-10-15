import Spinner from "../../../ui/Spinner";
import { useUpdateSettings } from "./updateSettings";
import { useSettings } from "./useSettings";

export default function UpdateAdminSettings() {
  const { settings, isLoading } = useSettings();
  const { updateSlotPrice, isUpdating } = useUpdateSettings();

  const { timeslotPrice } = settings || {};
  if (isLoading) return <Spinner />;
  console.log(timeslotPrice);

  function handleUpdate(e) {
    console.log(e.target);
    const { value } = e.target;
    if (!value) return;
    updateSlotPrice({ timeslotPrice: value });
  }
  return (
    <form>
      <div className="my-4">
        <label className="block text-md font-medium text-slate-600">
          Precio turno
        </label>
        <input
          type="number"
          defaultValue={timeslotPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e)}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600 max-w-[500px]"
        />
      </div>
    </form>
  );
}
