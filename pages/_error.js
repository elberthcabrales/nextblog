import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../components/BasePage'

export default ({ statusCode }) => (
  <BaseLayout title="Error!!!">
    <BasePage title="Error">
    {statusCode
      ? `Could not load your user data: Status Code ${statusCode}`
      : `Couldn't get that page, sorry!`}
      </BasePage>
  </BaseLayout>
);
