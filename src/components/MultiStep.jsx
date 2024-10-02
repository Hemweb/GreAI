import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import PhonePausedTwoToneIcon from "@mui/icons-material/PhonePausedTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import SubHead from "./SubHead";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import ClientsEmotion from "./ClientsEmotion";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import DoneIcon from "@mui/icons-material/Done";
function MultiStep() {
  const [active, setActive] = useState(2);
  const [showDetail, setShowDetail] = useState(false);

  const icons = [
    HomeTwoToneIcon,
    LocalPhoneTwoToneIcon,
    PhonePausedTwoToneIcon,
    AccountCircleTwoToneIcon,
  ];

  const tipsFromAi = {
    title: "Show confidence:",
    content:
      "Maybe telling him that you will resolve the issue soon would be good.",
  };
  const client = {
    clientName: "Augusto Coimbra",
    rating: 3,
  };
  const [chatData, setChatData] = useState([
    {
      text: "Hi, i am Good Rob!. Choose your option so we can help you.",
      sentBy: "bot",
    },
    {
      text: "Option 1",
      sentBy: "user",
    },
  ]);

  const [options, setOptions] = useState([
    {
      id: 1,
      option: "Technical Problem",
    },
    {
      id: 2,
      option: "Change your plan",
    },
    {
      id: 3,
      option: "Option Three",
    },
  ]);

  return (
    <Stack
      sx={{
        gap: [5],
        width: "100%",
        maxWidth: "950px",
        mt: [5],
        px:[2],
        mb:[10]
      }}
    >
      {/* icons */}
      <Stack direction={"row"} sx={{ overflow: ["scroll", "unset"] }}>

        {icons.map((Icon, index) => (
          <Stack
            direction={"row"}
            alignItems={"center"}
            key={index}
            sx={{ position: "relative" }}
          >
            {
                index === 2 &&
                <>
                
            <Typography  sx={{
                position: "absolute",
                fontSize:'12px',
                top:'5%'

            }}>
                8 mins
            </Typography>
            
            <Typography  sx={{
                position: "absolute",
                fontSize:'12px',
                top:'5%',
                right:'0'

            }}>
                12 mins
            </Typography>
                </>
            }
            
            <Box
              sx={{
                display : index === active ? 'block' : 'none',
                width: "0px",
                height: "0px",
                borderLeft: "30px solid transparent",
                borderBottom: "30px solid #fff",
                position: "absolute",
                top: "125%",
                transform: " translateY(-70%)",
                // bottom: '-100%',
                left: "50%",
                // right:'50%',
                rotate: "-135deg",
                // transform:'rotate(45deg)'
              }}
            />
            <Box
              sx={{
                height: "1px",
                width: "3.5rem",
                backgroundColor: "#00aeed",
              }}
            />
            <Stack
              onClick={() => setActive(index)}
              sx={{
                p: 1.5,
                bgcolor: index !== active ? "#fff" : "#00aeed",
                border: "1px solid #00aeed",
                boxShadow:index !== active ? "none" : "5px 10px 10px rgba(0,0,0,0.1) ",
                position: "relative",
                borderRadius: "5rem",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all .2s ease-in-out",
              }}
            >
              {index === 2 && (
                <Stack
                  sx={{
                    bgcolor: "#41cc06",
                    p: 0.5,
                    borderRadius: "5rem",
                    position: "absolute",
                    bottom: "-5px",
                    right: "-5px",
                  }}
                >
                  <DoneIcon
                    sx={{
                      color: "#fff",
                      fontSize: "small",
                    }}
                  />
                </Stack>
              )}
              <Icon
                sx={{
                  color: index === active ? "#fff" : "#00aeed",
                  transition: "all .2s ease-in-out",
                }}
              />
            </Stack>
            <Box
              sx={{
                height: "1px",
                width: "3.5rem",
                backgroundColor: "#00aeed",
              }}
            />
          </Stack>
        ))}
      </Stack>
      {/* content */}
      <Stack
        sx={{
          borderRadius: "2rem",
          bgcolor: "white",
          boxShadow: "10px 10px 10px rgba(0,0,0,0.05) ",
          //   height: "25rem",
          width: "100%",
        }}
      >
        {/* transcription */}
        <Stack
          sx={{
            px: [4],
            py: [4],
          }}
        >
          <SubHead>Resume of Transcription</SubHead>
          <Typography variant="body2" sx={{ mb: 2, maxWidth:['100%','100%','80%'] }}>
            The customer said his <a href="#">signal was lost this afternoon</a>{" "}
            and request an support through technical visit. He confirmed that{" "}
            <a href="#">made all steps to reset the equipment,</a> but the
            problem keep happening. Was suggested to wait a couple of hours, but
            the customer was impatient.
          </Typography>

          <Stack direction={"row"} alignItems={"center"} gap={2}>
            <SubHead>Transcription Detailed</SubHead>

            <IconButton onClick={() => setShowDetail((prev) => !prev)}>
              {showDetail ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </Stack>
          <Typography
            sx={{
              fontWeight: "600",
              width: "fit-content",
              fontSize: [14, 16],
              color: "grey",
              cursor: "pointer",
            }}
            onClick={() => setShowDetail((prev) => !prev)}
          >
            {showDetail ? "Click to close" : "Click to show"}
          </Typography>

          <Stack
            direction={{xs: 'column',sm:"row"}}
            sx={{
              display: showDetail ? "flex" : "none",
              width: "100%",
            }}
          >
            {/* chats */}
            <Stack
              sx={{
                width: ['100%',"50%"],
                gap: [3],
                py: [2],
              }}
            >
              {chatData.map((chat, index) => (
                <Stack
                  direction="row"
                  key={index}
                  sx={{ gap: 2, alignItems: "center" }}
                >
                  <Avatar
                    sx={{
                      bgcolor: chat.sentBy === "bot" ? "#4ac6ff" : "#379adb",
                      color: "#fff",
                    }}
                  >
                    {chat.sentBy === "bot" ? <SmartToyIcon /> : <PersonIcon />}
                  </Avatar>

                  <Stack
                    sx={{
                      bgcolor: chat.sentBy === "bot" ? "#f5f3ed" : "#e6eff7",
                      p: [2],
                      flex: 1,
                      position: "relative",
                      borderRadius: ".6rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "0px",
                        height: "0px",
                        borderLeft: "15px solid #000",
                        borderLeftColor:
                          chat.sentBy === "bot" ? "#f5f3ed" : "#e6eff7",
                        borderBottom: "15px solid transparent",
                        position: "absolute",
                        top: "45%",
                        transform: " translateY(-30%)",
                        left: "-0.5%",
                        rotate: "-45deg",
                      }}
                    />
                    <Typography sx={{ fontSize: [12] }}>{chat.text}</Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
            {/* options */}

            <Stack
              sx={{
                width: ['100%',"50%"],
                gap: [1],
                py: [2],
                alignItems: "center",
              }}
            >
              {options.map((option, index) => (
                <Stack
                  key={index}
                  direction="row"
                  sx={{
                    minWidth: "80%",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    borderRadius: "1rem",
                    border: "1px solid #00aeed",
                    color: "#00aeed",
                  }}
                >
                  {index + 1}
                  {". "} {option.option}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={{xs:"column",sm:"row"}}
          sx={{
            width: "100%",
          }}
        >
          <Stack
            sx={{
              bgcolor: "#f0fbff",
              width: ["100%", "50%"],
              p: [2],
              px: [4],
              gap: [2],

              borderRadius: [0,"0 0 0 2rem"],
            }}
          >
            <SubHead color="grey">Client's Emotion</SubHead>
            <ClientsEmotion value={3} />
            <Stack direction="row" alignItems={"center"} gap={2}>
              <Avatar sx={{ bgcolor: "#88dafc" }}>
                <AccountCircleTwoToneIcon />
              </Avatar>

              <Typography variant="body2">{client.clientName}</Typography>
            </Stack>
          </Stack>

          <Stack
            sx={{
              bgcolor: "#f7faff",
              width: ["100%", "50%"],
              p: [2],
              px: [4],
              gap: [1],
              borderRadius: ["0 0 2rem 2rem","0 0 2rem 0"],
            }}
          >
            <SubHead color="grey">Tips from GreAI</SubHead>
            <Stack>
              <Typography variant="body2">{tipsFromAi.title}</Typography>
              <Typography variant="body2">{tipsFromAi.content}</Typography>
            </Stack>
            <Stack direction="row" alignItems={"center"} gap={1}>
              <ThumbUpIcon sx={{ color: "#379adb" }} />
              <ThumbDownIcon sx={{ color: "#a5a5a5" }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MultiStep;
