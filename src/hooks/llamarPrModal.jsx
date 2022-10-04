import { useState } from 'react';

function llamarPrModal() {
  const [desplegarModal, setDesplegarModal] = useState(false);
  return { desplegarModal, setDesplegarModal };
}

export default llamarPrModal;
