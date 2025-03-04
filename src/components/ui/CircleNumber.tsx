const styles = {
  circle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "1px solid rgba(177, 175, 175, 0.7)",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
};

export function CircleNumber({ number }: { number: number }) {
  return <div style={styles.circle}>{number}</div>;
}

export default CircleNumber;
