import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';
import Head from '@/meta/Head';

function Index() {
  return (
    <>
      <Head
        title="Junior Giancarlo Sulca Méndez | Desarrollador de Software"
        description="Portafolio profesional de Junior Giancarlo Sulca Méndez, Desarrollador de Software especializado en backend, frontend y cloud computing."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
