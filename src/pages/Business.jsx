import BusinessSlider from "../components/BusinessSlider";
import BusinessPlans from "../components/BusinessPlans";
import BusinessServices from "../components/BusinessServices";
import TransferNumberForm from "../components/TransferNumberForm";
import VirtualAssistant from "../components/VirtualAssistant";

export default function Business() {
  return (
    <>
      <BusinessSlider />
      <BusinessPlans />
      <BusinessServices />
      <TransferNumberForm />
      <VirtualAssistant />
    </>
  );
}