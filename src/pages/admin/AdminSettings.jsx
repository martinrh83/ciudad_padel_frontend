import UpdateAdminSettings from "../../features/admin/settings/UpdateAdminSettings";
import Card from "../../ui/admin/Card";
import Heading from "../../ui/admin/Heading";

export default function AdminSettings() {
  return (
    <>
      <Heading>Actualizar Configuracion</Heading>
      <Card>
        <UpdateAdminSettings />
      </Card>
    </>
  );
}
