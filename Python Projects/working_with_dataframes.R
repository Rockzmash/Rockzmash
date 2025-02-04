# Import the file homes.csv into the dataframe homes
# Your code here
homes <- read.csv("/Users/davidpinheirorosa/Rockzmash/Python Projects/homes.csv", header=TRUE, stringsAsFactors=FALSE)

# Display the column names
# Your code here
print(colnames(homes))
# Display the number of instances
# Your code here
print(rownames(homes))
# Display the columns Price, Bath, Bed, Year, and Status for instances for which School is Edison
# Your code here
subset(homes, School == "Edison", select = c(Price, Bath, Bed, Year, Status))
# Add the column PriceSqFt to the dataframe with the values of Price divided by Floor
# Your code here
homes$PriceSqFt <- homes$Price / homes$Floor
# Display the first six rows of the dataframe with the new column
# Your code here
print(head(homes))