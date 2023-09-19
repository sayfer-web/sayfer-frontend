import { Helmet } from 'react-helmet-async';
// sections
import { InvoiceListView } from 'src/sections/invoice/view';
import TransactionsListView from 'src/sections/transactions/view/transactions-list-view';
// import TransactionsListView from 'src/sections/transactions/view/invoice-list-view';

// ----------------------------------------------------------------------

export default function InvoiceListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Invoice List</title>
      </Helmet>

      <TransactionsListView />
    </>
  );
}
