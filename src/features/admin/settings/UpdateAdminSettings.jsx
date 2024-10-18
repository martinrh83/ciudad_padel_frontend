import Spinner from "../../../ui/Spinner";
import { useUpdateSettings } from "./updateSettings";
import { useSettings } from "./useSettings";

export default function UpdateAdminSettings() {
  const { settings, isLoading } = useSettings();
  const { updateSettings, isUpdating } = useUpdateSettings();

  const { timeslotPrice, minimunPayment, contactPhone, accountAliasPayment } =
    settings || {};
  if (isLoading) return <Spinner />;
  console.log(timeslotPrice);

  function handleUpdate(e, field) {
    console.log(e.target);
    const { value } = e.target;
    if (!value) return;
    updateSettings({ [field]: value });
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
          onBlur={(e) => handleUpdate(e, "timeslotPrice")}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600 max-w-[500px]"
        />
      </div>
      <div className="my-4">
        <label className="block text-md font-medium text-slate-600">
          Precio seña
        </label>
        <input
          type="number"
          defaultValue={minimunPayment}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minimunPayment")}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600 max-w-[500px]"
        />
      </div>
      <div className="my-4">
        <label className="block text-md font-medium text-slate-600">
          Celular de contacto
        </label>
        <input
          type="tel"
          defaultValue={contactPhone}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "contactPhone")}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600 max-w-[500px]"
        />
      </div>
      <div className="my-4">
        <label className="block text-md font-medium text-slate-600">
          Alias cuenta de pago
        </label>
        <input
          type="text"
          defaultValue={accountAliasPayment}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "accountAliasPayment")}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600 max-w-[500px]"
        />
      </div>
    </form>
  );
}
