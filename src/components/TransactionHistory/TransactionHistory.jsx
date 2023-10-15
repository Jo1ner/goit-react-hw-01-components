import styles from "./TransactionHistory.module.css";

export function TransactionHistory({ items }) {
    return (
        
<table className={styles.transactionHistory}>
  <thead className={styles.headtitle}>
    <tr>
      <th className={styles.headTitleText}>Type</th>
      <th className={styles.headTitleText}>Amount</th>
      <th className={styles.headTitleText}>Currency</th>
    </tr>
  </thead>

                <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr className={styles.bodyRowText} key={id}>
                    <td className={styles.bodyCellText}>{type}</td>
                        <td className={styles.bodyCellText}>{amount}</td>
                        <td className={styles.bodyCellText}>{currency}</td>
                    </tr>))}

  </tbody>
</table>) 
};