import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Este método captura el error y actualiza el estado
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Este método captura información adicional sobre el error
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary atrapó un error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Muestra una UI alternativa si ocurre un error
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>¡Algo salió mal!</h1>
          <p>Por favor, recarga la página o contacta al soporte técnico.</p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </div>
      );
    }

    // Renderiza los hijos si no hay errores
    return this.props.children;
  }
}

export default ErrorBoundary;
