export default function Notebooks() {
  const notebooks = [
    "node.ipynb",
    "decisiontree.ipynb",
    "lda_svm_iris.ipynb",
    "pca_lda_iris.ipynb",
    "pca_lda_cali.ipynb",
    "pca_svm_cali.ipynb",
    "svm_pca_iris.ipynb",
    "dt_cali.ipynb",
    "knn_cali.ipynb",
    "knn.ipynb",
    "lasso_ridge.ipynb",
    "linear.ipynb",
    "linearVSpolynomialSVM.ipynb",
    "pca_svm_diabetes",
    "svm_nonlinear.ipynb",
    "svm1.ipynb",
    "svm_feature_instance_accuracy.ipynb",
    "wine.ipynb",
    "Adaline_Network_For_OR_Gate_Bipolar_Inputs_and_Targets.c",
    "Back_Propogation_Network_For_XOR_Gate_For_Bipolar_Inputs_and_Targets.c",
    "Cartesian_Product_of_Two_Fuzzy_Sets.c",
    "Combined_Cartesian_Product_Max_Min_Composition_And_Max_Product_Composition_Of_Fuzzy_Sets.c",
    "Genetic_Algorithm_Program.c",
    "Laws_Associated_With_Classical_Set.c",
    "Laws_Associated_With_Fuzzy_Set.c",
    "Madaline_Network_For_XOR_Gate_For_Bipolar_Inputs_and_Targets.c",
    "Max_Min_Composition_Of_Cartesian_Product_Matrices.c",
    "Max_Product_Composition_Of_Cartesian_Product_Matrices.c",
    "Primitive_Operations_Of_Classical_Sets.c",
    "Primitive_Operations_Of_Fuzzy_Sets_With_Dynamic_Components.c",
    "Single_Layer_Preceptron_For_Bipolar_AND_Gate.c",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Notebooks</h1>
      <ul>
        {notebooks.map((name) => (
          <li key={name}>
            <a
              href={`/notebooks/${name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
