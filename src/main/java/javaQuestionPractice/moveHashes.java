package javaQuestionPractice;

public class moveHashes {
    public static void main(String[] args) {
        System.out.println(moveHash("#Move##to#front"));
    }
    public static String moveHash(String s){
        char ch[]=s.toCharArray();
        int j=ch.length-1;
        for(int i=ch.length-1;i>=0;i--){
            if(ch[i]!='#'){
                char temp=ch[i];
                ch[i]=ch[j];
                ch[j]=temp;
                j--;  }  }
        StringBuilder sb=new StringBuilder();
        for(char c:ch){
            sb.append(c); }
        //System.out.println(sb);
        return sb.toString();
    }
}
