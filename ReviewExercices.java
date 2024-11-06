import javax.swing.JOptionPane;

public class ReviewExercices {

    /*public static void main(String[] args) {
        
        String input = JOptionPane.showInputDialog("Enter the height:");
        
        
        int cantidadDeLineas = Integer.parseInt(input);

        
        for (int i = 1; i <= cantidadDeLineas; i++) {
            
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            
            System.out.println();
        }
    }**/
    
    public static void main(String[] args) {
        
        String input = JOptionPane.showInputDialog("Enter the number of hours: ");
        
        
        int hours = Integer.parseInt(input);
        float perHour = 20000f;
        float descounts = 0.08f;
        float salary = 0;
        float fullSalary =0;
        
       fullSalary = perHour * hours;
       salary = fullSalary /descounts;
        System.out.println(salary);
        
    }
}
