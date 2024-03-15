import ResourceLink from "@/components/ResourceLink";
import { redirectLink } from "@/lib/utils";

export default function Link() {
  return <ResourceLink link={redirectLink[3].link} />;
}
