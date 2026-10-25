import styles from "./Services.module.css"

export default function ServiceCard({ icon, title, description, tags }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>
      
      {tags && tags.length > 0 && (
        <ul className={styles.tagList}>
          {tags.map((tag, index) => (
            <li key={index} className={styles.tagItem}>
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}