import { Target, Crosshair, RefreshCw, BarChart } from "lucide-react";
import "./ModelAccuracy.css";

const ModelAccuracy = () => {
  return (
    <div className="container page-container model-accuracy-page animate-fade-in">
      <div className="page-header text-center">
        <h1 className="page-title">Model Performance</h1>
        <p className="page-subtitle">
          Evaluation metrics for the trained cardiovascular risk assessment
          model.
        </p>
      </div>

      <div className="metrics-grid mb-12">
        <div className="metric-box card">
          <div className="metric-icon-wrapper">
            <Target size={24} />
          </div>
          <h3>Accuracy</h3>
          <div className="metric-value">72.82%</div>
        </div>
        <div className="metric-box card">
          <div className="metric-icon-wrapper">
            <Crosshair size={24} />
          </div>
          <h3>Precision</h3>
          <div className="metric-value">75.63%</div>
        </div>
        <div className="metric-box card">
          <div className="metric-icon-wrapper">
            <RefreshCw size={24} />
          </div>
          <h3>Recall</h3>
          <div className="metric-value">67.09%</div>
        </div>
        <div className="metric-box card">
          <div className="metric-icon-wrapper">
            <BarChart size={24} />
          </div>
          <h3>F1 Score</h3>
          <div className="metric-value">71.11%</div>
        </div>
      </div>

      <div className="visualizations-grid">
        <div className="viz-card card">
          <h3>Confusion Matrix</h3>

          <div className="confusion-matrix">
            <div className="cm-label"></div>
            <div className="cm-label">Predicted 0</div>
            <div className="cm-label">Predicted 1</div>

            <div className="cm-label">Actual 0</div>
            <div className="cm-cell">5081</div>
            <div className="cm-cell">1390</div>

            <div className="cm-label">Actual 1</div>
            <div className="cm-cell">2116</div>
            <div className="cm-cell">4314</div>
          </div>
        </div>
        <div className="viz-card card">
          <h3>ROC Curve</h3>

          <div className="roc-content">
            <div className="roc-score">
              <span>AUC</span>
              <strong>79.12%</strong>
            </div>

            <div className="roc-placeholder">
              <p>ROC curve visualization</p>
              <p className="roc-description">
                Area Under the Curve (AUC): 0.7912
              </p>
            </div>
          </div>
        </div>
        <div className="viz-card card feature-card">
          <h3>Model Comparison</h3>

          <div className="model-comparison">
            <div className="comparison-header">
              <span>Model</span>
              <span>Accuracy</span>
              <span>F1 Score</span>
            </div>

            <div className="comparison-row">
              <span>Decision Tree</span>
              <span>63.10%</span>
              <span>63.12%</span>
            </div>

            <div className="comparison-row">
              <span>KNN</span>
              <span>69.15%</span>
              <span>68.96%</span>
            </div>

            <div className="comparison-row">
              <span>Naive Bayes</span>
              <span>71.45%</span>
              <span>68.30%</span>
            </div>

            <div className="comparison-row selected-model">
              <span>Logistic Regression</span>
              <span>72.82%</span>
              <span>71.11%</span>
            </div>

            <div className="comparison-row">
              <span>Random Forest</span>
              <span>70.87%</span>
              <span>70.39%</span>
            </div>

            <div className="comparison-row">
              <span>AdaBoost</span>
              <span>72.84%</span>
              <span>70.55%</span>
            </div>
          </div>

          <p className="comparison-note">
            Logistic Regression was selected for the final model based on the
            evaluation and interpretability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelAccuracy;
