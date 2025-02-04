x <- 5
y <- 9
sum <- x + y
str <- "This is the sum:"


plot(1:10)
print(paste(str, sum))
semesterOne <- data.frame(
    Classes = c("Math", "English", "History"),
    Grades = c("A", "C", "B"),
    Percentage = c(98.5, 76.2, 85.3)
)
semesterTwo <- data.frame (
    Classes = c("Math", "English", "History"),
    Grades = c("F", "A", "A"),
    Percentage = c(40.2, 100, 95.3)
)

fullYear <- rbind(semesterOne, semesterTwo)
print(fullYear)
print(summary(fullYear))